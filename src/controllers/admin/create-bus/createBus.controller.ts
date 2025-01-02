import express from "express";
import { busesDataModel } from "../../../models/mongodb/bus-ticket/busSchema.model.js";

export const createBusController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    console.log("Create bus request received");
    await busesDataModel.create({
      name: "Night Shuttle 101",
      description:
        "A late-night shuttle service for airport and hotel transfers.",
      capacity: 20,
      departureTime: 1735707600000, // Example departure timestamp (2025-01-01T06:00:00Z)
      ticketPrice: 50,
      createdAt: Date.now(), // Example timestamp (2025-01-01T00:00:00Z)
      updatedAt: Date.now(), // Example timestamp (2025-01-01T00:00:00Z)
    });
    console.log("Bus created successfully");
    response.status(200).json({ _: "" });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};
