import React from 'react';
import classNames from 'classnames';

const ConfiguratorButton = ({ onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('c-configBtn', className)}
    >Configurator</button>
  );
};

export default ConfiguratorButton;
