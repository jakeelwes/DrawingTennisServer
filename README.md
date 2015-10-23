# inner squares server API endpoints

## GET /harvest

This endpoint is for looking up a harvest by its seed and hybrid.

### parameters

*	seed_id
*	hybrid_id

### example request

`GET /harvest?seed_id=0&hybrid_id=0`

response:

```js
{
	"seed_id": 0,
	"seed": 13191361,
	"hybrid_id": 0,
	"hybrid": "(oLiL)2", // maybe use the python notation here?
	"harvest_id": 9494949,
	"solution": { // would be `false` rather than this object if not solved
		"solver": "John von Neumann",
		"solution": "17:19"
	}
	"harvest": [
		1739761,
		3024121,
		9144576,
		83612736,
		69906321,
		"... also 145 others, omitted here for brevity"
	]
}
```

## POST /harvest

This endpoint is for solving a harvest.

### parameters

*	seed
*	hybrid
*	solution
*	name (optional)

### example request

`POST /harvest?seed_id=0&hybrid_id=0&solution=[17:19]&name=John%20von%20Neumann`

response:

```js
{
	"seed_id": 0,
	"seed": 13191361,
	"hybrid_id": 0,
	"hybrid": "(oLiL)2", // maybe use the python notation here?
	"harvest_id": 9494949,
	"solution": { // would be `false` rather than this object if not solved
		"solver": "John von Neumann",
		"solution": "17:19"
	}
	"harvest": [
		1739761,
		3024121,
		9144576,
		83612736,
		69906321,
		"... also 145 others, omitted here for brevity"
	]
}
```

## GET /harvest/random

This endpoint is for getting a random harvest.

You can specify whether you're only interested in solved or unsolved harvests, or omit that parameter to allow either.

You can also specify if you'd like to only look at a particular seed or hybrid.

### parameters:

*	solved (optional)
*	seed_id (optional)
*	hybrid_id (optional)

### example request

`GET /harvest/random?solved=false`

## GET /seed

Currently this endpoint is for looking up a seed_id from a seed string. At some point it could also return some statistics about that seed.

### parameters:

Either of the following two parameters is required:

*	seed_id
* seed

## GET /seeds

This endpoint is for getting a list of every seed.


## GET /hybrid

Currently this endpoint is for looking up a hybrid_id from a hybrid string. At some point it could also return some statistics about that hybrid.

### parameters:

Either of the following two parameters is required:

*	hybrid_id
* hybrid

## GET /hybrids

This endpoint is for getting a list of every hybrid.
