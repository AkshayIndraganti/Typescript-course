export class ListTemplate {
    constructor(containter) {
        this.containter = containter;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerHTML = item.format();
        li.append(p);
        if (pos === 'start') {
            this.containter.prepend(li);
        }
        else {
            this.containter.append(li);
        }
    }
}
