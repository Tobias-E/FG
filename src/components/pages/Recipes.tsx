import styled from 'styled-components';

// Assets, interfaces & states
import butterChicken from '../../assets/img/butterchicken.png';
import forret from '../../assets/img/Jordskokkesuppe.png';
import bagvaerk from '../../assets/img/surdej.png';
import dessert from '../../assets/img/panna cotta.png';
import hovedret from '../../assets/img/fish bowl.png';
import kage from '../../assets/img/kladdkaka.png';

// Components
import { Category } from '../molecules';

export const Recipes: React.FC = () => {
	return (
		<Main>
			<h1>Recipes</h1>
			<Categories>
				<Category title={'Alle opskrifter'} src={butterChicken} />
				<Category title={'Bagværk'} src={bagvaerk} />
				<Category title={'Forret'} src={forret} />
				<Category title={'Hovedret'} src={hovedret} />
				<Category title={'Dessert'} src={dessert} />
				<Category title={'Kage'} src={kage} />
			</Categories>
		</Main>
	);
};

const Main = styled.main`
	padding: 4rem 0;
`;

const Categories = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
