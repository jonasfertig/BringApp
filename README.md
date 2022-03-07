# Bring-App

@authors: Thayná Camargo da Silva, Berend Fuchs, Clemens Zeller, Jonas Fertig

## Description
This app was a group project at HS Offenburg. 
The objective of the development was to create a platform that enables a simplified communication between shoppers/bringers and clients with a shopping wish. 
Our biggest source of inspiration, concerning the overall usage was [Bringman](https://bringman.de)

## Architecture
Our application consists of a react-app containing a redux-store, a nodejs server in the back-end, which is routing to the mySql database,
and a Keycloak instance for user-management. All of those instances are supposed to be running in docker-containers.
