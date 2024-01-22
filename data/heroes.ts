import { HeroProps } from "@/lib/types";

export const heroes: HeroProps[] = [
	{
		"id": 1,
		"key": "ana",
		"name": "Ana",
		"role": "support",
		"counters": [
			{ id: 1, key: "roadhog", name: "Roadhog", role: "Tank", notes: ""},
			{ id: 2, key: "mauga", name: "Mauga", role: "Tank", notes: ""},
			{ id: 3, key: "winston", name: "Winston", role: "Tank", notes: ""},
		],
		"countered_by": [
			{ id: 1, key: "genji", name: "Genji", role: "Damage", notes: ""},
			{ id: 2, key: "sombra", name: "Sombra", role: "Damage", notes: ""},
			{ id: 3, key: "tracer", name: "Tracer", role: "Damage", notes: ""},
			{ id: 4, key: "dva", name: "D.Va", role: "Tank", notes: ""},
			{ id: 5, key: "widowmaker", name: "Widowmaker", role: "Damage", notes: ""},
		],
		"notes": ""
	},
	{
		"id": 2,
		"key": "ashe",
		"name": "Ashe",
		"role": "damage",
		"counters": [
			{ id: 1, key: "tracer", name: "Tracer", role: "Damage", notes: "Ashe can 1 shot Tracer in the head. But if you can't aim Tracer will counter you."},
			{ id: 2, key: "widowmaker", name: "Widowmaker", role: "Damage", notes: ""},
			{ id: 3, key: "ana", name: "Ana", role: "Support", notes: "Ana is an easier target to hit for snipers, but remember Ana can sleep Bob and make him useless for a short period of time."},
		],
		"countered_by": [
			{ id: 1, key: "tracer", name: "Tracer", role: "Damage", notes: ""},
			{ id: 2, key: "widowmaker", name: "Widowmaker", role: "Damage", notes: ""},
			{ id: 3, key: "hanzo", name: "Hanzo", role: "Damage", notes: ""},
			{ id: 4, key: "reinhardt", name: "Reinhardt", role: "Tank", notes: "Shield helps defend others. Not an absolute counter."},
		],
		"notes": ""
	},
	{
		"id": 3,
		"key": "baptiste",
		"name": "Baptiste",
		"role": "support",
		"counters": [],
		"countered_by": [
			{ id: 1, key: "dva", name: "D.Va", role: "Tank", notes: ""},
			{ id: 2, key: "genji", name: "Genji", role: "Damage", notes: ""},
			{ id: 3, key: "hanzo", name: "Hanzo", role: "Damage", notes: ""},
			{ id: 4, key: "roadhog", name: "Roadhog", role: "Tank", notes: ""},
		],
		"notes": "These aren't hard counters just suggestions.  A good Baptiste shouldn't have too many issues against any hero."
	},
	{
		"id": 4,
		"key": "bastion",
		"name": "Bastion",
		"role": "damage",
		"counters": [
			{ id: 1, key: "mauga", name: "Mauga", role: "Tank", notes: ""},
			{ id: 2, key: "roadhog", name: "Roadhog", role: "Tank", notes: ""},
			{ id: 3, key: "reinhardt",  name: "Reinhardt", role: "Tank", notes: ""},
		],
		"countered_by": [
			{ id: 1, key: "sigma", name: "Sigma", role: "Tank", notes: ""},
			{ id: 2, key: "dva", name: "D.Va", role: "Tank", notes: ""},
			{ id: 3, key: "genji", name: "Genji", role: "Damage", notes: ""},
			{ id: 4, key: "tracer", name: "Tracer", role: "Damage", notes: ""},
		],
		"notes": ""
	},
	{
		"id": 5,
		"key": "brigitte",
		"name": "Brigitte",
		"role": "support",
		"counters": [
			{ id: 1, key: "tracer", name: "Tracer", role: "Damage", notes: ""},
			{ id: 2, key: "genji", name: "Genji", role: "Damage", notes: ""},
		],
		"countered_by": [
			{ id: 1, key: "bastion", name: "Bastion", role: "Damage", notes: ""},
			{ id: 2, key: "pharah", name: "Pharah", role: "Damage", notes: ""},
			{ id: 3, key: "junkrat", name: "Junkrat", role: "Damage", notes: ""},
		],
		"notes": "Brigitte is great against assassin characters but you better hope your team can mitigate their damage taken."
	},
	{
		"id": 6,
		"key": "cassidy",
		"name": "Cassidy",
		"role": "damage",
		"counters": [
			{ id: 1, key: "tracer", name: "Tracer", role: "Damage", notes: ""},
			{ id: 2, key: "moira", name: "Moira", role: "Support", notes: ""},
		],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 7,
		"key": "doomfist",
		"name": "Doomfist",
		"role": "tank",
		"counters": [
			{ id: 1, key: "reinhardt", name: "Reinhardt", role: "Tank", notes: ""},
		],
		"countered_by": [
			{ id: 1, key: "orisa", name: "Orisa", role: "Tank", notes: ""},
		],
		"notes": ""
	},
	{
		"id": 8,
		"key": "dva",
		"name": "D.Va",
		"role": "tank",
		"counters": [
			{ id: 1, key: "bastion", name: "Bastion", role: "Damage", notes: ""},
		],
		"countered_by": [
			{ id: 1, key: "zarya", name: "Zarya", role: "Tank", notes: ""},
			{ id: 2, key: "symmetra", name: "Symmetra", role: "Damage", notes: ""},
		],
		"notes": ""
	},
	{
		"id": 9,
		"key": "echo",
		"name": "Echo",
		"role": "damage",
		"counters": [
			{ id: 1, key: "pharah", name: "Pharah", role: "Damage", notes: ""},
		],
		"countered_by": [
			{ id: 1, key: "bastion", name: "Bastion", role: "Damage", notes: ""},
			{ id: 2, key: "soldier-76", name: "Soldier: 76", role: "Damage", notes: ""},
			{ id: 3, key: "cassidy", name: "Cassidy", role: "Damage", notes: ""},
			{ id: 4, key: "ashe", name: "Ashe", role: "Damage", notes: ""},
		],
		"notes": ""
	},
	{
		"id": 10,
		"key": "genji",
		"name": "Genji",
		"role": "damage",
		"counters": [
			{ id: 1, key: "bastion", name: "Bastion", role: "Damage", notes: ""},
			{ id: 2, key: "soldier-76", name: "Soldier: 76", role: "Damage", notes: ""},
		],
		"countered_by": [
			{ id: 1, key: "symmetra", name: "Symmetra", role: "Damage", notes: ""},
			{ id: 2, key: "moira", name: "Moira", role: "Support", notes: ""},
			{ id: 3, key: "winston", name: "Winston", role: "Tank", notes: ""},
			{ id: 4, key: "zarya", name: "Zarya", role: "Tank", notes: ""},
			{ id: 5, key: "cassidy", name: "Cassidy", role: "Damage", notes: ""},
		],
		"notes": ""
	},
	{
		"id": 11,
		"key": "hanzo",
		"name": "Hanzo",
		"role": "damage",
		"counters": [],
		"countered_by": [
			{ id: 1, key: "winston", name: "Winston", role: "Tank", notes: ""},
			{ id: 2, key: "widowmaker", name: "Widowmaker", role: "Damage", notes: ""},
			{ id: 3, key: "genji", name: "Genji", role: "Damage", notes: ""},
			{ id: 4, key: "dva", name: "D.Va", role: "Tank", notes: ""},
		],
		"notes": "Hanzo can one shot any character with 200 HP or less. He counters a lot of DPS unless they're aware of the arrows."
	},
	{
		"id": 12,
		"key": "illari",
		"name": "Illari",
		"role": "support",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 13,
		"key": "junker-queen",
		"name": "Junker Queen",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 14,
		"key": "junkrat",
		"name": "Junkrat",
		"role": "damage",
		"counters": [
			{ id: 1, key: "reinhardt", name: "Reinhardt", role: "Tank", notes: ""},
		],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 15,
		"key": "kiriko",
		"name": "Kiriko",
		"role": "support",
		"counters": [
			{ id: 1, key: "ana", name: "Ana", role: "Support", notes: ""},
		],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 16,
		"key": "lifeweaver",
		"name": "Lifeweaver",
		"role": "support",
		"counters": [
			{ id: 1, key: "zarya", name: "Zarya", role: "Tank", notes: ""},
			{ id: 2, key: "mauga", name: "Mauga", role: "Tank", notes: ""},
			{ id: 3, key: "sigma", name: "Sigma", role: "Tank", notes: ""},
			{ id: 4, key: "orisa", name: "Orisa", role: "Tank", notes: ""},
		],
		"countered_by": [
			{ id: 1, key: "sombra", name: "Sombra", role: "Damage", notes: ""},
		],
		"notes": ""
	},
	{
		"id": 17,
		"key": "lucio",
		"name": "Lúcio",
		"role": "support",
		"counters": [
			{ id: 1, key: "genji", name: "Genji", role: "Damage", notes: ""},
			{ id: 2, key: "soldier-76", name: "Soldier: 76", role: "Damage", notes: ""},
		],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 18,
		"key": "mauga",
		"name": "Mauga",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 19,
		"key": "mei",
		"name": "Mei",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 20,
		"key": "mercy",
		"name": "Mercy",
		"role": "support",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 21,
		"key": "moira",
		"name": "Moira",
		"role": "support",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 22,
		"key": "orisa",
		"name": "Orisa",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 23,
		"key": "pharah",
		"name": "Pharah",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 24,
		"key": "ramattra",
		"name": "Ramattra",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 25,
		"key": "reaper",
		"name": "Reaper",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 26,
		"key": "reinhardt",
		"name": "Reinhardt",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 27,
		"key": "roadhog",
		"name": "Roadhog",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 28,
		"key": "sigma",
		"name": "Sigma",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 29,
		"key": "sojourn",
		"name": "Sojourn",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 30,
		"key": "soldier-76",
		"name": "Soldier: 76",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 31,
		"key": "sombra",
		"name": "Sombra",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 32,
		"key": "symmetra",
		"name": "Symmetra",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 33,
		"key": "torbjorn",
		"name": "Torbjörn",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 34,
		"key": "tracer",
		"name": "Tracer",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 35,
		"key": "widowmaker",
		"name": "Widowmaker",
		"role": "damage",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 36,
		"key": "winston",
		"name": "Winston",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 37,
		"key": "wrecking-ball",
		"name": "Wrecking Ball",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 38,
		"key": "zarya",
		"name": "Zarya",
		"role": "tank",
		"counters": [],
		"countered_by": [],
		"notes": ""
	},
	{
		"id": 39,
		"key": "zenyatta",
		"name": "Zenyatta",
		"role": "support",
		"counters": [],
		"countered_by": [],
		"notes": ""
	}
]