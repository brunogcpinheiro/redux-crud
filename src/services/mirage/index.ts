import { createServer, Model, Factory } from "miragejs";
import faker from "faker";

export type User = {
  name: string;
  email: string;
  created_at: string;
};

export const makeServer = () => {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.firstName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds: (server) => {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;

      this.get("/users");
      this.post("/users", (_, request) => {
        const user = JSON.parse(request.requestBody);
        return user;
      });
    },
  });

  return server;
};
