import debug from 'debug';

const logger = (nameSpace, message) => {
  return debug(nameSpace)(message);
};

export default logger;
