export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
  };
  
  export type IUpdateUser = {
    userId: string;
    name: string;
    bio: string;
    imageId: string;
    imageUrl: URL | string;
    file: File[];
  };
  
  export type INewPost = {
    userId: string;
    caption: string;
    file: File[];
    location?: string;
    tags?: string;
  };
  
  export type IUpdatePost = {
    postId: string;
    caption: string;
    imageId: string;
    imageUrl: URL;
    file: File[];
    location?: string;
    tags?: string;
  };
  
  export type IUser = {
    userId: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
  };
  
  export type INewUser = {
    name: string;
    email: string;
    username: string;
    password: string;
  };
  export type IContextType = {
  };

  export type IPost ={
    id:string,
    name:string,
    username:string,
    description:string,
    imageURL:string,
    userImageURL:string,
    tags:string[],
    location:string,
    likes: Map<unknown, unknown>,
    comments:string[]

  }
