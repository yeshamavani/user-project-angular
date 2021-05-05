
export class UserStore<T> {
    store: T[] = [];

    constructor() {
    }

    createRecord(record: T): T[] {
        this.store.push(record);
        return this.store
    }

    getRecords(): T[] {
        return this.store;
    }

    // setRecords(record: T[]) {
    //     this.store = record;
    // }

    deleteAll() {
        this.store = [];
    }

    deleteOne(index: number): T[] {
        this.store.splice(index, 1);
        return this.store;
    }

    seedData(seed: T[]) {
        this.deleteAll();
        this.store.push(...seed);
    }

    cancelOrSaveChanges(record: T, x: number): T[] {
        this.store[x] = record;
        return this.store;
    }

    updateData(record: T, x: number): T[] {
        this.store[x] = record;
        return this.store;
    }



}