#!/usr/bin/env node

// Porsea Framework
// Created by Cashfazz Team
// To contribute visit: https://github.com/payfazz/porsea

const yargs = require("yargs");
const startPorsea = require("../cmds/start-porsea");
const buildPorsea = require("../cmds/build-porsea");

const argv = yargs
  .command(
    "start",
    "Start Porsea Project",
    yargs => yargs.option("port", { alias: "p", default: 3000 }),
    startPorsea
  )
  .command("build", "Build Porsea Project", buildPorsea)
  .demandCommand(1, "")
  .strict().argv;
