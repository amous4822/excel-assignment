### API Request Information 

Main URL : https://localhost:5000/

## Entering student data

**POST api/candidate**

{
	"name": "Rakesh",
	"email": "rakesh@gmail.com"
}
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

{
	"email" : " rakesh@gmail.com ",
	"first_round": 9,
	"second_round":9,
	"third_round":9
}
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
{
&emsp;"result": [
&emsp;&emsp;{
&emsp;&emsp;&emsp;"name": "Rakesh",
&emsp;&emsp;&emsp;"total": 27
&emsp;&emsp;}
&emsp;]
}

## Querying average scores of all students

**POST api/scores/average**

### Response

{
&emsp; "result": {
&emsp;&emsp;"avg_first_round": 5.666666666666667,
&emsp;&emsp;"avg_second_round": 5.666666666666667,
&emsp;&emsp;"avg_third_round": 8.333333333333334
&emsp;}
}

