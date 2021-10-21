// Add your code here
// const formData = {
//     dogname : 'Bryon',
//     dogbreed : 'Poodle'
// }


// const objectConfig = {
//     method: 'POST',
//     headers: {
//         'content-type' : application/json,
//         'accept' : application/json
//     },
//     body : JSON.stringify(formData),
// }

// fetch('http://localhost:3000/dogs', objectConfig)
// .then(r => r.json())
// .then(data => console.log(data))

// function submitData(name, email) {
//     return fetch('http://localhost:3000/users')
//         .then(r => r.json())
//         .then(data => data)
//             // name = data.name
//             // email = data.email
//         })
// }
// const users1 = {
//     console.log(target.name.value)
//     // name :
//     // email : ''
// const layout = {
//     newlayout = {
//         name : `${name}`,
//         email : `${email}`
//     method : 'POST',
//     headers: {
//         'Content-Type' : 'application/json',
//         Accept : 'application/json'
//     },
//     body: JSON.stringify({
//         name: 
//     })
//     }

const body = document.querySelector('body')

function submitData(name, email) {
    const userData = {
        name: name,
        email: email,
    };
    
      // method: "POST" is missing from the object below
    const configurationObject = {
        method : "POST",
        headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
        },
        body: JSON.stringify(userData),
    };
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            body.append(object.id);
        })
        .catch(function (error) {
        body.append(error.message);
        });

}