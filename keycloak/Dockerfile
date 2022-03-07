# specify the node base image with your desired version node:<version>
FROM jboss/keycloak:latest

WORKDIR /opt/jboss/keycloak

COPY ./register.ftl ./themes/base/login

RUN mkdir ./themes/costum1
RUN mkdir ./themes/costum1/login
COPY ./login ./themes/costum1/login
RUN mkdir ./themes/costum1/login/resources
RUN mkdir ./themes/costum1/login/resources/css
RUN mkdir ./themes/costum1/login/resources/img
COPY ./css ./themes/costum1/login/resources/css
