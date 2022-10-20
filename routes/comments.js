const express = require("express");
const router = express.Router();
const Comment = require("../model/Comment");

router.get("/", async (req, res) => {
    try {
        const c = await Comment.find()
        res.json(c);
    } catch (err) {
        res.send("Error" + err)
    }
});

router.get("/:userID", async (req, res) => {
    try {
        const c = await Comment.find({ userID: req.params.userID })
        res.json(c);
    } catch (err) {
        res.send("Error" + err)
    }
});

router.post("/", async (req, res) => {
    try {
        const comment = new Comment({
            userID: req.body.userID,
            username: req.body.username,
            hotelName: req.body.hotelName,
            commentContent: req.body.commentContent
        });
        const c = await comment.save();
        res.json(c);
    } catch (err) {
        console.log(err.message);
        res.send("Error in Adding Comment");
    }
});

router.put("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        comment.userID = req.body.userID;
        comment.username = req.body.username;
        comment.hotelName = req.body.hotelName;
        comment.commentContent = req.body.commentContent;
        const c = await comment.save()
        res.json(c)
    } catch (err) {
        console.log(err.message);
        res.send("Error in Updating Comment (PUT)");
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        comment.commentContent = req.body.commentContent;
        const c = await comment.save()
        res.json(c)
    } catch (err) {
        console.log(err.message);
        res.send("Error in Updating Comment (PATCH)");
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const c = await Comment.findByIdAndDelete(req.params.id);
        res.json(c)
    } catch (err) {
        console.log(err.message);
        res.send("Error in Deleting Comment");
    }
})

module.exports = router;