### API Request Information 

Main URL : https://localhost:5000/

## Entering student data

**POST api/candidate**

{ <br/>
&emsp;"name": "Rakesh",<br/>
&emsp;"email": "rakesh@gmail.com"<br/>
}<br/>
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

{<br/>
&emsp;"email" : " rakesh@gmail.com ",<br/>
&emsp;"first_round": 9,<br/>
&emsp;"second_round":9,<br/>
&emsp;"third_round":<br/>
}<br/>


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
&emsp;"result": [<br/>
&emsp;&emsp;{<br/>
&emsp;&emsp;&emsp;"name": "Rakesh",<br/>
&emsp;&emsp;&emsp;"total": 27<br/>
&emsp;&emsp;}<br/>
&emsp;]<br/>
}<br/>

## Querying average scores of all students

**POST api/scores/average**

### Response

{<br/>
&emsp; "result": {<br/>
&emsp;&emsp;"avg_first_round": 5.666666666666667,<br/>
&emsp;&emsp;"avg_second_round": 5.666666666666667,<br/>
&emsp;&emsp;"avg_third_round": 8.333333333333334<br/>
&emsp;}<br/>
}

