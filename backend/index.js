import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
	res.send("Hello from DALL.E!");
});

const startServer = async () => {
	try {
		app.listen(8080, () =>
			console.log("Server started on port http://localhost:8080")
		);
	} catch (error) {
		console.log(error);
	}
};

startServer();
