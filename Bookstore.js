class Book{
    constructor(isbn,bookname,booktitle,bookauthor,quantityofbooks,bookprice){
            this.isbn=isbn;
            this.bookname=bookname;
            this.booktitle=booktitle;
            this.bookauthor=bookauthor;
            this.quantityofbooks=quantityofbooks;
            this.bookprice=bookprice;
    }
        calculate(){
            return this.quantityofbooks*this.bookprice;
        }
        displaybook(){
            console.log(`ISBN:${this.isbn} BookName:${this.bookname} Booktitle:${this.booktitle} Bookauthor:${this.bookauthor} 
            Quantity:${this.quantityofbooks} BookPrice:${this.bookprice}`);
        }

        displayamount(){
            const amount=this.calculate();
            console.log(`Bill Amount:${amount}`);
        }
}

const book=new Book("1234","Nature","Price of flower","Sree","25","250");
book.displaybook();
book.displayamount();
