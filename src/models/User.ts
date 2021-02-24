import {Column, CreateDateColumn, Entity, PrimaryColumn} from 'typeorm'

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id)
    }

}

export {User}