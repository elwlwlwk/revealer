import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const port = 3003;

app.use(cors());

app.get("/:tokenId", async (req, res) => {
  const tokenId = req.params.tokenId || "1";
  try {
    if (!parseInt(tokenId)) throw `invalid token id: ${tokenId}`;
    const metadata = await (
      await fetch(`https://puu.by-syl.com/json/${tokenId}.json`)
    ).json();
    res.json(metadata);
  } catch (e) {
    console.error(e);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
