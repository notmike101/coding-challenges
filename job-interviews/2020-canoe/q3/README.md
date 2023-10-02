# CANOE

Q3. Web Form Submission and Handling

In a form, we have three input boxes for users to type in their choices of courses and submit the form without refreshing the page(i.e using ajax request). Here are the requirements:

1. User can type in 1, 2 or 3 courses
2. Each choice is case insensitive (also, user can type anything, in any case or leave it empty)
3. The choices have to contain "calculus" (in any case, e.g "Calculus" or "CALCULUS") in one input box.
4. Frontend code should make sure the choices contain "calculus".
5. Backend code on the server side needs to have the same validation as in frontend to make sure data is
consistent.

```html
<form action="/post" /* form submission handler ... */ >
Choice A: <input type="text" name="choices[]"/>
Choice B: <input type="text" name="choices[]"/>
Choice C: <input type="text" name="choices[]"/>
<input type="submit" value="Submit"/>
</form>
```

1. Please use vanilla Javascript or any frontend framework to submit the request.

2. Please use any backend framework to handle the request and save the correct data into a database.