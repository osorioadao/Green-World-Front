import React from 'react'
import styles from './Relatar.module.css'
import Sidebar from 'components/Sidebar'


function Relatar() {

  return (
    <div className={styles.containerRelatar}>

        <form className={styles.form} action="">

            <div className={styles.texto}>
                <p className={styles.par}>Relate aqui os amontoados perto de si. Campos obrigatórios <b>*</b></p>
            </div>

            <div className={styles.inputs}>
                <label htmlFor="tipodeamontoado">Tipo de Lixo ♻️ <b>*</b></label>
                <select name="selectGarbage" id="selectGarbage">
                    <option value="1">Orgânico</option>
                    <option value="2">Reciclável</option>
                    <option value="3">Perigoso</option>
                    <option value="4">Electrónico</option>
                    <option value="5">Outros</option>
                </select>

                 <label htmlFor="localidade">Qual é a sua localidade ? 📍 <b>*</b></label>
                <select name="selectPlace" id="selectPlace">
                    <option value="1">Luanda</option>
                    <option value="2">Cazenga</option>
                    <option value="3">Viana</option>
                    <option value="4">Rangel</option>
                    <option value="5">Hoji-Ya-Heda</option>
                    <option value="6">Quiçama</option>
                    <option value="7">Belas</option>
                    <option value="8">Ícolo e Bengo</option>
                    <option value="10">Camama</option>
                    <option value="11">Mussulo</option>
                    <option value="12">Calumbo</option>
                    <option value="13">Samba</option>
                    <option value="14">Maianga</option>
                    <option value="14">Mutamba</option>
                    <option value="15">Ngola Kiluanje</option>
                </select>

                <label htmlFor="quantidade">Quantidade de lixo 📈 <b>*</b></label>
                <select name="selectAmount" id="selectAmount" className={styles.amount}>
                    <option value="1">Pequeno ( Até 1 saco de lixo)</option>
                    <option value="2">Médio (1 a 5 sacos de lixo)</option>
                    <option value="3">Grande (Muitos sacos de lixo)</option>
                </select>

                <label htmlFor="textarea">Dé uma breve descrição ✍🏼 <b>*</b></label>
                <textarea name="texto" id="texto" className={styles.text} placeholder='ex: A situação nesta localidade está crítica e precisa de resolução imediata.' />

                <label htmlFor="foto">Carregue o ficheiro 📁 <b>*</b></label>
                <input type="file" name="foto" id="foto" />

                {/*<input type="datetime-local" name="shbn" id="" />  =>  Pega a data actual e somente se colocará a hora*/}
            </div>

            <div className={styles.btn}>
                <button type='button' className={styles.button}>Relatar</button>
            </div>

        </form>
    </div>
  )

}

export default Relatar