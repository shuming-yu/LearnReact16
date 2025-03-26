import React, { Component } from 'react';
import file from './file.json';
import FileNode from './FileNode';

const File = () => {
  return (
    <>
      {/* <FileNode name={file.name} files={file.files} /> */}
      <FileNode {...file} />
    </>
  );
}

export default File;
