/// <reference types="cypress" />
/// <reference types="node" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import prisma from "../../../server/src/prisma";

// eslint-disable-next-line no-unused-vars
const pluginConfig: Cypress.PluginConfig = (on, config) => {
  on("task", {
    "db:teardown": () => {
      return (async () => {
        await prisma.subrole.deleteMany();
        await prisma.hostVerification.deleteMany();
        await prisma.host.deleteMany();
        await prisma.role.deleteMany();
        await prisma.user.deleteMany();
        await prisma.$disconnect();
        return null;
      })();
    },
  });
};

export default pluginConfig;
