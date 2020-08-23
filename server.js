const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/Auctionwala'));
app.get("/*", function(req, res) {
  res.sendFile("index.html", {root: "dist/Auctionwala/"}
);
});
app.listen(process.env.PORT || 8080);
