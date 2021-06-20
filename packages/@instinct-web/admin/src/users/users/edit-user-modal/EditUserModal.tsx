import {omit} from 'lodash';
import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {EditUserModalProps} from './EditUserModal.types';
import {InternalUser, UpdateInternalUserDTO} from '@instinct-prj/interface';
import {
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import {
  Avatar,
  Form,
  Icon,
  Input,
  manageUsersService,
  useFetchAllRanks,
  Select,
} from '@instinct-web/core';

export function EditUserModal({user, onUpdated}: EditUserModalProps) {
  const ranks = useFetchAllRanks();
  const [updatedUser, setUpdatedUser] = useState<UpdateInternalUserDTO>({
    ...omit(user, ['joinDate', 'lastLoginDate', 'password', 'online']),
    userOfTheWeek: user.userOfTheWeek ? 1 : 0,
  });
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showModal, setModal] = useState(false);

  function onChange<K extends keyof InternalUser>(
    key: K,
    value: InternalUser[K]
  ) {
    setUpdatedUser(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function onToggle() {
    setModal(_ => !_);
    setConfirmDelete(false);
  }

  async function onToggleDelete() {
    if (!confirmDelete) {
      setConfirmDelete(_ => !_);
      return;
    }

    await manageUsersService.delete(user.id);
    toast.info(`${user.username}'s account has been deleted`);
    onUpdated();
  }

  async function onSubmit() {
    await manageUsersService.update(user.id, updatedUser);
    toast.info(`${updatedUser.username}'s account has been updated`);
    setModal(false);
    onUpdated();
  }

  return (
    <>
      <div
        className="admin-article row mb-3"
        style={{height: 100, width: '100%'}}
      >
        <div className="col-4">
          <Avatar look={updatedUser.figure} headOnly />
        </div>
        <div className="col-8 text-right">
          <h3>{updatedUser.username}</h3>
          <div className="row mr-2" style={{float: 'right'}}>
            <button className="btn btn-info" onClick={onToggle}>
              <Icon type="pencil" />
              Edit
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>Edit User</ModalHeader>
        <Form className="" onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <label>Username</label>
              <Input
                type="text"
                name="username"
                value={updatedUser.username}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Email</label>
              <Input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <Input
                type="password"
                name="password"
                value={updatedUser.password}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Rank</label>
              {!ranks && <Icon className="fa-spin" type="spinner" />}
              {ranks && (
                <Select
                  options={ranks}
                  value={ranks.find(_ => _.id === updatedUser.rankID) ?? null}
                  getOptionLabel={(_: any) => _.name}
                  getOptionValue={(_: any) => _.id}
                  onChange={(_: any) => onChange('rankID', _.id)}
                />
              )}
            </FormGroup>
            <FormGroup>
              <label>Figure</label>
              <Input
                type="text"
                name="figure"
                value={updatedUser.figure}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Credits</label>
              <Input
                type="number"
                name="credits"
                value={updatedUser.credits}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Pixels</label>
              <Input
                type="number"
                name="pixels"
                value={updatedUser.pixels}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Points</label>
              <Input
                type="number"
                name="points"
                value={updatedUser.points}
                onChange={onChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <div className="row w-100">
              <div className="col-6">
                <button
                  className="btn btn-danger"
                  onClick={onToggleDelete}
                  type="button"
                >
                  {confirmDelete ? <>Are you sure?</> : <>Delete Account</>}
                </button>
              </div>
              <div className="col-6 text-right">
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </div>
            </div>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}
