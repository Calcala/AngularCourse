export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string, desc:string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }

    public getName(){
        return this.name;
    }

    public getDescription(){
        return this.description;
    }

    public getImagePath(){
        return this.imagePath;
    }
    
}