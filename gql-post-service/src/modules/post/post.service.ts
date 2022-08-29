import { Injectable } from '@nestjs/common';
import { Post } from 'src/entities/post.entity';
import { httpPost } from 'src/utils/util.function';

@Injectable()
export class PostService {
  private postList: Post[] = [
    { id: 1, authorId: 1, title: 'Alice in wonderland' },
    { id: 2, authorId: 2, title: 'Rise of a crime boss' },
    { id: 3, authorId: 3, title: 'Captain tim-tim' },
    { id: 4, authorId: 4, title: 'Fox road eclipse' },
    { id: 5, authorId: 5, title: 'Fireboy DML - Bandana' },
  ];

  forAuthor = (authorId: number): Post[] =>
    this.postList.filter((post) => post.authorId === Number(authorId));

  findOne = (postId: number): Post => {
    this.queryServiceExternally();
    return this.postList.find((post) => post.id === postId);
  };

  /**
   * Query another service from a gql service via Axios
   * TODO: In a GQL federation, make queries via the federated gateway, not the service url
   */
  private queryServiceExternally = () => {
    // URl of federated service
    const url = 'http://localhost:8000/graphql';
    httpPost(url, {
      query: `query findUserByNameAndId {
        getUserByIdAndName(id: 1, name: "Jaime Logan") {
          id,
          name,
          age,
        }
      }`,
    })
      .then(({ data }: any) => {
        console.log(data);
      })
      .catch((ex) => {
        console.error(ex);
        console.log(ex?.data?.errors);
      });
  };

  findAll = (): Post[] => [...this.postList];
}
