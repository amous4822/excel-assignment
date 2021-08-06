### API Request Information 

Main URL : https://localhost:5000/

## Entering student data

**POST api/candidate**

{__
	"name": "Rakesh",__
	"email": "rakesh@gmail.com"__
}__
| field | type | description |  
|--|--|--|
| name | String | name of the candidate
|email| String| email of the candidate 

Additional Rule

 - The email should be valid email address
 - The name can not be empty
 - Every email Id should be unique

## Entering student Scores

**POST api/candidate**

{__
	"email" : " rakesh@gmail.com ",__
	"first_round": 9,__
	"second_round":9,__
	"third_round":9__
}__
| field | type | description |  
|--|--|--|
|email| String| email of the candidate 
|first_round| Number| Test scores in first round
|second_round| Number| Test scores in second round
|third_round| Number| Test scores in third round

Additional Rule

 - The email should be valid email address.
 - The email should exist in the database.
 - Scores already existing can not be rewritten.
 - Scores for all the 
 - The maximum value for test scores should be 10 and minimum should be 0.

## Querying students with highest scores

**POST api/scores/highest**

### Response
{__
&emsp;"result": [__
&emsp;&emsp;{__
&emsp;&emsp;&emsp;"name": "Rakesh",__
&emsp;&emsp;&emsp;"total": 27__
&emsp;&emsp;}__
&emsp;]__
}__

## Querying average scores of all students

**POST api/scores/average**

### Response

{__
&emsp; "result": {__
&emsp;&emsp;"avg_first_round": 5.666666666666667,__
&emsp;&emsp;"avg_second_round": 5.666666666666667,__
&emsp;&emsp;"avg_third_round": 8.333333333333334__
&emsp;}__
}

