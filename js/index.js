class Module{
    constructor(){
        this.getData();
    }

    async getData(){

        try{
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            this.contactsData(data.users);
            console.log(data.users);    
        } catch{
            console.error(error);
        }
    }

    contactsData(data){
        const usersData = data.map(({firstName, lastName, age, email, image}) => ({
            firstName,
            lastName,
            age,
            email,
            image,
        }));

        this.createTableWrapper();
        this.render(usersData);
        
    }

    createTableWrapper(){
        const createTableWrapperElement = document.createElement('div');
        createTableWrapperElement.classList.add('app');
        createTableWrapperElement.innerHTML = `
            <div class="table__content">
                <table></table>
            </div>
        `
        document.body.appendChild(createTableWrapperElement); 
    }

    render(usersData){
        const createTableContent = document.querySelector('table');
        const createTableElements = document.querySelector('.table__content');
        let userData = '';
        usersData.forEach((data) => {
            const {firstName, lastName, age, email, image} = data;
            userData += `
                <tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td class="age">${age}</td>
                    <td>${email}</td>
                    <td><img src="${image} class="png__img"></td>
                </tr>
            `
        });

        createTableElements.appendChild(createTableContent);
        createTableContent.innerHTML = `${userData}`;
    }
}

new Module();
