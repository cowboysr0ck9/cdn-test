/**
 * @function connect
 * Establishes connection with websocket and also
 * ensures constant reconnection if connection closes unexpectedly
 */
export const connect = (url: string) => {
  const wss = new WebSocket(url);

  // websocket onopen event listener
  wss.onopen = () => {
    console.log("connected websocket main component");
  };

  // websocket onclose event listener
  wss.onclose = (e) => {
    console.log("Connection Closed");
  };

  // websocket onerror event listener
  wss.onerror = (err) => {
    console.error(err);

    wss.close();
  };
};

/**
 * Checks if websocket instance is closed, if so call `connect` function.
 */
export const check = (wss: WebSocket, cb: Function) => {
  if (!wss || wss.readyState === WebSocket.CLOSED) cb();
};

// WSS Events Table

// WebSocket.CONNECTING = 0
// WebSocket.OPEN = 1
// WebSocket.CLOSING = 2
// WebSocket.CLOSED	= 3
