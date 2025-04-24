const express = require('express');
const path = require('path');
const app = express();

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is running at:
  - Local:   http://localhost:${port}
  - Network: http://${getLocalIPAddress()}:${port}`);
});

// Utility to get local IP address
function getLocalIPAddress() {
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
}
