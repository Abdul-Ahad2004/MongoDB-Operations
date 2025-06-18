import express from 'express';
import * as userCtrl from '../controllers/userController.js';

const router = express.Router();

router.get("/insertOne", userCtrl.insertOne);
router.get("/insertMany", userCtrl.insertMany);
router.get("/find", userCtrl.find);
router.get("/findOne", userCtrl.findOne);
router.get("/findLimit", userCtrl.findLimit);
router.get("/findSkip", userCtrl.findSkip);
router.get("/findSort", userCtrl.findSort);
router.get("/distinct", userCtrl.distinct);
router.get("/countDocs", userCtrl.countDocs);
router.get("/updateOne", userCtrl.updateOne);
router.get("/updateMany", userCtrl.updateMany);
router.get("/replaceOne", userCtrl.replaceOne);
router.get("/deleteOne", userCtrl.deleteOne);
router.get("/deleteMany", userCtrl.deleteMany);
router.get("/aggregate", userCtrl.aggregateData);
router.get("/createIndex", userCtrl.createIndex);
router.get("/dropIndex", userCtrl.dropIndex);
router.get("/getIndexes", userCtrl.getIndexes);
router.get("/findOneAndUpdate", userCtrl.findOneAndUpdate);
router.get("/findOneAndDelete", userCtrl.findOneAndDelete);
router.get("/bulkWrite", userCtrl.bulkWrite);
router.get("/findOneAndReplace", userCtrl.findOneAndReplace);
router.get("/renameCollection", userCtrl.renameCollection);
router.post("/drop", userCtrl.drop);
router.get("/listCollections", userCtrl.listCollections);

export default router;
