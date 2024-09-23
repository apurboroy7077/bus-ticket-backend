import { project2DataModelMongoDbMongoose } from "../../models/mongodb/archdune/archdune2.model.js";
export const giveProjectDataController = async (request, response) => {
    try {
        const receivedData = request.body;
        const projectData = await project2DataModelMongoDbMongoose.find({});
        response
            .status(200)
            .json({ message: "Fetched Sucessfully", data: projectData });
    }
    catch (error) {
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
};
export const giveProjectDataForClientController = async (request, response) => {
    try {
        const receivedData = request.body;
        const projectData = await project2DataModelMongoDbMongoose.find({
            visibilityStatus: "VISIBLE",
        });
        response
            .status(200)
            .json({ message: "Fetched Sucessfully", data: projectData });
    }
    catch (error) {
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
};
export const giveProjectDataBasedOnIdController = async (request, response) => {
    try {
        const receivedData = request.body;
        const { projectId } = receivedData;
        const projectData = await project2DataModelMongoDbMongoose.findById(projectId);
        response
            .status(200)
            .json({ message: "Fetched Sucessfully", data: projectData });
    }
    catch (error) {
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error.message });
    }
};
//# sourceMappingURL=projects.controller.js.map