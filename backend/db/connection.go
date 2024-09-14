package db

import (
	"context"
	"fmt"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var mongoURL = os.Getenv("MONGO_URL")

func OpenConnection() (*mongo.Client, error) {
	if mongoURL == "" {
		return nil, fmt.Errorf("MONGO_URL environment variable is not set")
	}

	clientOptions := options.Client().ApplyURI(mongoURL)

	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		return nil, err
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		return nil, err
	}

	log.Println("Sucessfully conected to MongoDB!")
	return client, nil
}
