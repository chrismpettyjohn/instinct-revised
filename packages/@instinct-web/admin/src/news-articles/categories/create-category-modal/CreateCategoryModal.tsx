import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {SketchPicker} from 'react-color';
import {articleService, Form, Input} from '@instinct-web/core';
import {CreateCategoryModalProps} from './CreateCategoryModal.types';
import {
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import {
  ArticleCategoryDTO,
  exampleArticleCategoryDTO,
} from '@instinct-prj/interface';

export function CreateCategoryModal({onCreation}: CreateCategoryModalProps) {
  const [showModal, setModal] = useState(false);
  const [category, setCategory] = useState<ArticleCategoryDTO>(
    exampleArticleCategoryDTO
  );

  function onChange<K extends keyof ArticleCategoryDTO>(
    key: K,
    value: ArticleCategoryDTO[K]
  ) {
    setCategory(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function onToggle() {
    setModal(_ => !_);
  }

  async function onSubmit() {
    try {
      await articleService.createCategory(category.name, category.color);
      setCategory(exampleArticleCategoryDTO);
      setModal(false);
      toast.success(`Category ${category.name} has been created`);
      onCreation();
    } catch {
      toast.error(
        `Category ${category.name} could not be created at this time`
      );
    }
  }

  return (
    <>
      <button className="btn btn-primary mt-2" onClick={onToggle}>
        <i className="fa fa-plus-square mr-2" />
        New
      </button>
      <Modal isOpen={showModal} onToggle={onToggle}>
        <ModalHeader toggle={onToggle}>Create Category</ModalHeader>
        <Form className="" onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <h4>Name</h4>
              <Input
                type="text"
                name="name"
                value={category.name}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup></FormGroup>
            <h4>Color</h4>
            <SketchPicker
              color={category.color}
              onChange={e => onChange('color', e.hex)}
            />
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" type="submit">
              Save
            </button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}
