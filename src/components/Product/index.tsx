import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum
      commodi porro, quisquam tempore atque nobis dignissimos suscipit harum
      illum voluptas quia sequi accusamus ut architecto quo quidem laborum
      voluptates.
    </Descricao>
  </Card>
)
export default Product
