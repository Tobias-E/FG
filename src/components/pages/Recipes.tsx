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
			<Categories>
				<Category title={'Alle opskrifter'} src={butterChicken} link={'all'} />
				<Category title={'Bagværk'} src={bagvaerk} link={'all'} />
				<Category title={'Forret'} src={forret} link={'all'} />
				<Category title={'Hovedret'} src={hovedret} link={'all'} />
				<Category title={'Dessert'} src={dessert} link={'all'} />
				<Category title={'Kage'} src={kage} link={'all'} />
			</Categories>
		</Main>
	);
};

const Main = styled.main`
	padding: 5rem 0 4rem 0;
`;

const Categories = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
