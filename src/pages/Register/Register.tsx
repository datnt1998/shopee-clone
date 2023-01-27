import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Input } from 'src/components'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirmPassword: string
}

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  console.log(errors)

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type='email'
                name='email'
                placeholder='Email'
                wrapperClassName='mt-8'
                errorMessage={errors.email?.message}
                rules={rules.email}
                register={register}
              />
              <Input
                type='password'
                name='password'
                placeholder='Password'
                wrapperClassName='mt-2'
                errorMessage={errors.password?.message}
                rules={rules.password}
                autoComplete='on'
                register={register}
              />
              <Input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                wrapperClassName='mt-2'
                errorMessage={errors.confirmPassword?.message}
                rules={rules.confirmPassword}
                autoComplete='on'
                register={register}
              />
              <div className='mt-3'>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-sm bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
