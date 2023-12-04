import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'


export async function handleSubmit(e: any,router:AppRouterInstance,avatar:string) {
    e.preventDefault()
    try {
            await fetch('/auth',{
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    name: e.target[0].value,
                    email: e.target[1].value,
                    imageId: `https://robohash.org/${avatar}.png`
                })
            })
            router.push('/chat')
    } catch (error) {
        console.log(error)
    }
}