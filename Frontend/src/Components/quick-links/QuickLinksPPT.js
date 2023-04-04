import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import QuickLinks from "../quick-links/QuickLinks"

const QuickLinksPPT = () => {
    const navigate = useNavigate();
    let url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    var k;
    let links = {
        "UnderstandingBlood": "https://docs.google.com/presentation/d/e/2PACX-1vTDvHv1ye0mpsyZOGFU5C9esebX78qG8IuoLj0M0K5SMbHd-8IcXsfeXAZcpkwbZA/embed?start=false&loop=false&delayms=3000",
        "FunctionsOfBlood": "https://docs.google.com/presentation/d/e/2PACX-1vSULVTo4Nu8bbNqr4M7fPwlpxCvzwZmOU40OfMdhNGiNY1RcHqNyyjTXsDCfA88bA/embed?start=false&loop=false&delayms=3000",
        "ComponentsOfBlood": "https://docs.google.com/presentation/d/e/2PACX-1vRx_SHZGjB-faLbdASNwWKyr2TW1DbflxY-4o8Lswn4hcNilMwdFY8v940n8c1hIw/embed?start=false&loop=false&delayms=3000",
        "Plasma": "https://docs.google.com/presentation/d/e/2PACX-1vSBtA85xYYMdc-VAVdcL2hzu23a8bQKsurtpytISAbJN7wTjWwOlmPmSqeM0pwo-Q/embed?start=false&loop=false&delayms=3000",
        "Platelets": "https://docs.google.com/presentation/d/e/2PACX-1vS5t-ivCBoLlmpUHE63VKk1EVlSzvZ3Dm8rHkKjLvfBBu49f0x_21GBEmpkuqQ2bA/embed?start=false&loop=false&delayms=3000",
        "RBC": "https://docs.google.com/presentation/d/e/2PACX-1vTmPFUEP-NFJaVNsSaB_XsvBUSAnxO45qzeXahsDOcWQgGUiX_MlKZhMV7jRl6Ubw/embed?start=false&loop=false&delayms=3000",
        "WBC": "https://docs.google.com/presentation/d/e/2PACX-1vSN6u3EQf6eMt2l2LqXCMAWGxdeIbaQ05wlmiUjiZSSBH7auHlVc4FgJP2yk21xKw/embed?start=false&loop=false&delayms=3000",
        "FactsAboutBlood": "https://docs.google.com/presentation/d/e/2PACX-1vQJQFm2j8Mwdy9_RAKZ4RgEsG8IzOCfW-5hg6HyFp6d6RH7l15yiLGfB-r4MMzK7g/embed?start=false&loop=false&delayms=3000",
        "UnderstandingBloodGroup": "https://docs.google.com/presentation/d/e/2PACX-1vQf0hcY_zhHRJW8MslrlmV_VXRjBzwdnhlHxq8IT50biztsfyew8c1-dZR_63NZ7w/embed?start=false&loop=false&delayms=3000",
        "InheritenceOfBloodGroup": "https://docs.google.com/presentation/d/e/2PACX-1vSe1SgFAkcjglCoj9MOvZcKCyBl9O29GGilf9XXpdPx3J7TcCJhLGdUTaIWxyNwGA/embed?start=false&loop=false&delayms=3000",
        "BloodTest": "https://docs.google.com/presentation/d/e/2PACX-1vQT7NFaNrx18MtNDZAdofybj6ZXyxDuvGhBdbgz3MCgL-rhKPXOFf1W2_A4UAZBAg/embed?start=false&loop=false&delayms=3000",
        "NeedOfBloodDonation": "https://docs.google.com/presentation/d/e/2PACX-1vReGX0cmzZCUmbZQJ-osN2R_x-HY-Sio4YKStIlgbrtSMqOA24b83QR4JJsjxqUhQ/embed?start=false&loop=false&delayms=3000",
        "TypesOfBloodDonation": "https://docs.google.com/presentation/d/e/2PACX-1vRWi6P3d9NVR6uH9pN3UFK9mtjjyRgnrgucJjZ3GdHwyZqMp4iES65NvxbsEQvIJw/embed?start=false&loop=false&delayms=3000",
        "DonationProcess": "https://docs.google.com/presentation/d/e/2PACX-1vSDUsoz7TPbsSNcXXiVgvofdLKRYoHomChHT1wfIVXJeWG4INgtS0eZ1oo4tOQ5RA/embed?start=false&loop=false&delayms=3000",
        "Eligibility": "https://docs.google.com/presentation/d/e/2PACX-1vTIzNq0fWTCUjS2rWvojhPy_XLyaojBQ4Ms_MuIwnx-CdV9booJmZvPJ1exG84VRw/embed?start=false&loop=false&delayms=3000",
        "BenefitsOfBloodDonation": "https://docs.google.com/presentation/d/e/2PACX-1vRd4sLfV_k9_ftvIu-tsBzjW_JTJtM9MAr1QNWmRpvdb8is0_pXq1vnmnknICHJLw/embed?start=false&loop=false&delayms=3000",
        "BenefitsOfOnlineDonation": "https://docs.google.com/presentation/d/e/2PACX-1vTt41M4WmuQeqDO80nx7B3w9CIMf7eXO3CUrOglMZk0ExoLDRG-1iT0LF495au4GQ/embed?start=false&loop=false&delayms=3000",
        "EatAndDrink": "https://docs.google.com/presentation/d/e/2PACX-1vQn4EbV_p1J1ac4v31Ip6tl3T_dx_jAuSriRGNCaw3JO7-GAuqLyqX4qyNrhxeVpA/embed?start=false&loop=false&delayms=3000",
    }

    if (url in links) {
        console.log("matched")
        k = links[url]
    }
    else {
        alert("This page is not currently available. It will be added soon.")
        setTimeout(() => {
            navigate("/")
        }, 500);
    }
    
    return (
        <>
            <Header loggedIn={true}></Header>
            <QuickLinks></QuickLinks>
            <div className='embed-responsive embed-responsive-1by1 max-vw-100 vh-100' >
                <iframe className='embed-responsive-item w-100 h-75' src={k} title="PPT" allowFullScreen></iframe>
            </div>
        </>
    )
}

export default QuickLinksPPT
