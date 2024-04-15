#!/usr/bin/env node
import FootballStatService from "../src/footballStat.server.js";
const paramStatistic = process.argv[2]

const statistic = await new FootballStatService(paramStatistic).getStat();

console.log(statistic);