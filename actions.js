export default function acceptDisclaimer() {
  return (dispatch) =>
    new Promise(async (resolve) =>
      resolve(
        dispatch({
          type: 'ACCEPT_DISCLAIMER',
        }),
      ),
    );
}
