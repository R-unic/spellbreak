import { Networking } from "@flamework/networking";
import type { DataValue } from "./data-models/generic";
import type { GitHubInfo } from "./structs/github";
import type { GamepassInfo } from "./structs/roblox-api";
import type CharacterStats from "./data-models/character-stats";

interface ServerEvents {
  battle: {

  };
  data: {
    initialize(): void;
    set(directory: string, value: DataValue): void;
    increment(directory: string, amount?: number): void;
  };
  character: {
    playAs(index: number): void;
    toggleDefaultMovement(on: boolean): void;
    updateStats(updater: (stats: CharacterStats) => void): void;
  };
}

interface ClientEvents {
  battle: {
    createClient(battleCircleID: string, opponents: Model[], characterData: unknown): void;
  };
  data: {
    updated(directory: string, value: DataValue): void;
  };
  character: {
    playAs(index: number): void;
    toggleCustomMovement(on: boolean): void;
  };
}

interface ClientEvents {
  data: {
    updated(directory: string, value: unknown): void;
  };
}

interface ServerFunctions {
  data: {
    get(directory: string): unknown;
  };
  github: {
    getInfo(): GitHubInfo;
  };
  roblox: {
    getGamepasses(amount?: number): GamepassInfo[];
  };
}

interface ClientFunctions { }

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
