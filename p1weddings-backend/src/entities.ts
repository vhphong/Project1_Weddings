

export class Wedding {
    constructor(
        public weddingID: number,
        // public weddingDate: JSON,
        public weddingDate: string,
        public weddingLocation: string,
        public name: string,
        public budget: number
    ) { }
}


export class Expense {
    constructor(
        public expenseID: number,
        public wedding_ID: number,
        public reason: string,
        public amount: number
    ) { }
}


export class Employee {
    constructor(
        public employeeID: number,
        public employeeFname: string,
        public employeeLname: string,
        public employeeEmail: string,
        public employeePassword: string
    ) { }
}


export class Message {
    constructor(
        public messageID: number,
        public senderID: number,
        public recipientID: number,
        public messageContent: string
    ) { }
}