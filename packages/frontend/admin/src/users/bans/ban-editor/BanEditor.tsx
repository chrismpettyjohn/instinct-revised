import {UserBanDTO} from '@instinct-prj/interface';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import React, {useContext, useEffect, useState} from 'react';
import {
  Avatar,
  Form,
  Row,
  sessionContext,
  userService,
  DatePicker,
} from '@instinct-prj/frontend';
import {
  BanEditorProps,
  BanEditorState,
  defaultBanDTO,
  defaultBanEditorState,
} from './BanEditor.types';

export function BanEditor({
  children,
  defaultBan = defaultBanDTO,
  onSave,
}: BanEditorProps) {
  const session = useContext(sessionContext);
  const [username, setUsername] = useState('');
  const [state, setState] = useState<BanEditorState>({
    ...defaultBanEditorState,
    ban: {
      ...defaultBan,
      userID: session.user!.id,
    },
  });

  useEffect(() => {
    async function mergeUser(userID: number) {
      const user = await userService.getByID(userID);
      setUsername(user.username);
    }

    mergeUser(state.ban.userID);
  }, [state.ban.userID]);

  useEffect(() => {
    async function fetchUser(userID: number) {
      const user = await userService.getByID(userID);
      setValue('user', user);
    }

    fetchUser(state.ban.userID);
  }, [state.ban.userID]);

  useEffect(() => {
    async function fetchUser(username: string) {
      const user = await userService.getByUsername(username);
      setBan('userID', user.user.id);
    }

    fetchUser(username);
  }, [username]);

  function setValue<K extends keyof BanEditorState>(
    key: K,
    value: BanEditorState[K]
  ): void {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function setBan<K extends keyof UserBanDTO>(
    key: K,
    value: UserBanDTO[K]
  ): void {
    setState(_ => ({
      ..._,
      ban: {
        ..._.ban,
        [key]: value,
      },
    }));
  }

  function toggleModal(): void {
    setState(_ => ({
      ..._,
      showModal: !_.showModal,
    }));
  }

  async function onSubmit() {
    setValue('showSpinner', true);

    try {
      await onSave(state.ban);
      setValue('showSpinner', false);
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  return (
    <>
      <div onClick={toggleModal}>{children}</div>
      <Modal isOpen={state.showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ban Editor</ModalHeader>
        <ModalBody>
          <Form className="" onSubmit={onSubmit}>
            <div className="row mt-3" style={{padding: 2}}>
              <div className="col-8">
                <h4>Username</h4>
                <input
                  className="form-control"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="col-4">
                <Avatar className="mt-2" look={state.user?.figure} headOnly />
              </div>
            </div>

            <div className="mt-3" style={{padding: 2}}>
              <h4>Reason</h4>
              <textarea
                className="form-control"
                rows={3}
                value={state.ban.reason}
                onChange={e => setBan('reason', e.target.value)}
              />
            </div>

            <div className="mt-3" style={{padding: 2}}>
              <h4>Start Date</h4>
              <DatePicker
                defaultTimestamp={state.ban.banStart}
                onChange={val => setBan('banStart', val)}
              />
            </div>

            <div className="mt-3" style={{padding: 2}}>
              <h4>End Date</h4>
              <DatePicker
                defaultTimestamp={state.ban.banEnd}
                onChange={val => setBan('banEnd', val)}
              />
            </div>

            <Row className="mt-3">
              <div className="col-6">&nbsp; </div>
              <div className="col-6 text-right">
                <button
                  className="btn btn-success"
                  disabled={state.showSpinner}
                >
                  {state.showSpinner ? (
                    <i className="fa fa-spinner fa-spin" />
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}
