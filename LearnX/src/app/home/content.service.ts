import { Content } from './../shared/content.model';

export class ContentService {
private content: Content[] = [
  new Content('SAURAV ASOPA',
  // tslint:disable-next-line:max-line-length
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum facilis dolor, placeat consequatur et possimus voluptas esse ea culpa veniam quisquam fuga veritatis reprehenderit minima dolorem vitae temporibus magni incidunt aliquid? Pariatur, esse provident! Corporis reprehenderit quam velit earum quod modi expedita voluptatibus delectus magnam blanditiis soluta repudiandae consequatur unde voluptas culpa explicabo quos quasi, nobis iure! Consectetur ipsum, temporibus quis excepturi illum aliquam doloremque ipsam ducimus enim totam odit reprehenderit numquam ullam quasi praesentium nemo quaerat laudantium quo facilis id! Ut facere molestiae optio. Delectus molestiae hic deleniti illo nam commodi laborum eum harum? Repellat perspiciatis recusandae consequatur est.',
  '../../assets/background-image.jpg', '../../assets/me.jpg'),
  new Content('GAURAV', 'saurav asopa', '../../assets/content1Image.jpg', 'ASOPA'),
  new Content('abc', 'abac', '../../assets/content2Img.jpg', 'saurav')
];

getContent() {
  return this.content.slice();
}
}
