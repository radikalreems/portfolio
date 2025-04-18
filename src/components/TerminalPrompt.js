import React from 'react';

const TerminalPrompt = ({ command, showCursor = true, promptText = "ochoa@dev:~$" }) => {
  return (
    <>
      <span className="terminal-prompt">{promptText}</span> <span className="command">{command}</span>
      {showCursor && <span className="cursor">_</span>}
    </>
  );
};

export default TerminalPrompt; 