import React from 'react';
import Clipboard from 'react-clipboard.js';
import classNames from 'classnames';
import styles from './with-copy-button.module.scss';

const WithCopyButton = ({
  children,
  dataToCopy,
  wrapperLabel,
  copyButtonLabel,
}) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopyButtonClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className={classNames(styles.wrapper, wrapperLabel)}>
      {children}
      <Clipboard
        className={classNames(styles.copyButton, copyButtonLabel)}
        data-clipboard-text={dataToCopy}
        onSuccess={handleCopyButtonClick}
      >
        {copied ? 'Copied!' : 'Copy'}
      </Clipboard>
    </div>
  );
};

export default WithCopyButton;
