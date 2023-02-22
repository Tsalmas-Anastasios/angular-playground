export class User {

    first_name: string;
    last_name: string;
    email: string;
    date_of_birth?: Date | string;
    is_admin?: boolean;
    privileges?: UserPrivileges;
    addresses?: Address[];

    constructor(props: User) {

        this.first_name = props?.first_name || null;
        this.last_name = props?.last_name || null;
        this.email = props?.email || null;
        this.date_of_birth = props?.date_of_birth || null;
        this.is_admin = props?.is_admin || false;
        this.privileges = props?.privileges || new UserPrivileges();
        this.addresses = props?.addresses || [];

    }

}



export class UserPrivileges {

    blog_post_create?: boolean;
    blog_post_read?: boolean;
    blog_post_update?: boolean;
    blog_post_delete?: boolean;

    constructor(props?: UserPrivileges) {

        this.blog_post_create = props?.blog_post_create || false;
        this.blog_post_read = props?.blog_post_read || false;
        this.blog_post_update = props?.blog_post_update || false;
        this.blog_post_delete = props?.blog_post_delete || false;

    }

}



export class Address {

    street: string;
    city: string;
    state: string;
    country: string;

    constructor(props?: Address) {

        this.street = props?.street || null;
        this.city = props?.city || null;
        this.state = props?.state || null;
        this.country = props?.country || null;

    }

}

