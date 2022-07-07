import type { FC } from 'react';
import classNames from 'classnames/bind';
import classes from './404.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

const cx = classNames.bind(classes);
const Error404: FC = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('page-container')}>
        <div className={cx('content')}>
          <h2 className={cx('error-code')}>404</h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            Sorry, we couldn't find this page.
          </p>
          <p className='mt-4 mb-8 text-gray-600'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to='/'>
            <Button className='!rounded-full font-bold'>Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
