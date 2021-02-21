import Toggle from 'react-toggle';
import React, {useContext, useState} from 'react';
import {Permissions, RankDTO} from '@instinct-prj/interface';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {configContext, Form, Input, Row} from '@instinct-prj/frontend';
import {
  defaultRankEditorState,
  RankEditorState,
  RankEditorProps,
  defaultRankDTO,
} from './RankEditor.types';

export function RankEditor({
  children,
  defaultRank = defaultRankDTO,
  onSave,
}: RankEditorProps) {
  const {config} = useContext(configContext);
  const [state, setState] = useState<RankEditorState>({
    ...defaultRankEditorState,
    rank: defaultRank,
  });

  function setValue<K extends keyof RankEditorState>(
    key: K,
    value: RankEditorState[K]
  ): void {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function setRank<K extends keyof RankDTO>(key: K, value: RankDTO[K]): void {
    setState(_ => ({
      ..._,
      rank: {
        ..._.rank,
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
      await onSave(state.rank);
      setValue('showSpinner', false);
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  const permissionKeyToWord: Record<keyof Permissions, string> = {
    websiteAdminClient: 'Admin Client',
    websiteShowStaff: 'Show as Staff',
    websiteShowAdminPanel: 'Use Admin Panel',
    websiteManageEmulator: 'Manage Emulator',
    websiteManageNews: 'Manage ListArticles',
    websiteManageRanks: 'Manage Ranks',
    websiteManageUsers: 'Manage Users',
    websiteManageBans: 'Manage Bans',
    websiteManageConfig: 'Manage Config',
    websiteManageBetaCodes: 'Manage Beta Codes',
    websiteManageGuestbook: 'Manage Guestbook',
  };

  const permissionIndexes: Array<keyof Permissions> = Object.keys(
    permissionKeyToWord
  ) as any;

  return (
    <>
      <div onClick={toggleModal}>{children}</div>
      <Modal isOpen={state.showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Rank Editor</ModalHeader>
        <ModalBody>
          <Form className="" onSubmit={onSubmit}>
            <div className="mt-3" style={{padding: 2}}>
              <h4>Name</h4>
              <Input
                type="text"
                name="name"
                onChange={setRank}
                value={state.rank.name}
              />
            </div>
            <div className="mt-3 row" style={{padding: 2}}>
              <div className="col-8">
                <h4>Badge</h4>
                <Input
                  type="text"
                  name="badge"
                  onChange={setRank}
                  value={state.rank.badge}
                />
              </div>
              <div className="col-4">
                <div
                  style={{
                    background: '#001726',
                    borderRadius: '50%',
                    marginTop: 30,
                    padding: 5,
                    height: 45,
                    width: 45,
                    textAlign: 'center',
                  }}
                >
                  <img
                    alt="rank badge"
                    src={`${config.swfBadgeURL}/${state.rank.badge}.gif`}
                  />
                </div>
              </div>
            </div>
            <div className="mt-3" style={{padding: 2}}>
              <h4>Permissions</h4>
              <div className="row">
                {permissionIndexes.map(permission => (
                  <div className="col-lg-6" key={permission}>
                    <div className="row">
                      <div className="col-2">
                        <Toggle
                          checked={state.rank[permission]}
                          onChange={() =>
                            setRank(permission, !state.rank[permission])
                          }
                        />
                      </div>
                      <div className="col-10 text-right">
                        {permissionKeyToWord[permission]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
