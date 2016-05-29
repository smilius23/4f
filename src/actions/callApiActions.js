import { CALL_API } from 'redux-api-middleware';

export function postData(link, payload) {
  return {
    [CALL_API]: {
      endpoint: link,
      method: 'POST',
      types: ['START', 'DONE', 'FAILURE'],
     headers: { 'Content-Type': 'application/json' },
     	body: JSON.stringify(payload)
    }
  };
}

export const uploadData = {
	post: postData
}

export default uploadData