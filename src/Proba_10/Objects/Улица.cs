﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba_10
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Улица.
    /// </summary>
    // *** Start programmer edit section *** (Улица CustomAttributes)

    // *** End programmer edit section *** (Улица CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УлицаE", new string[] {
            "Назв as \'Назв\'"})]
    [View("УлицаL", new string[] {
            "Назв as \'Назв\'"})]
    public class Улица : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазв;
        
        // *** Start programmer edit section *** (Улица CustomMembers)

        // *** End programmer edit section *** (Улица CustomMembers)

        
        /// <summary>
        /// Назв.
        /// </summary>
        // *** Start programmer edit section *** (Улица.Назв CustomAttributes)

        // *** End programmer edit section *** (Улица.Назв CustomAttributes)
        [StrLen(255)]
        public virtual string Назв
        {
            get
            {
                // *** Start programmer edit section *** (Улица.Назв Get start)

                // *** End programmer edit section *** (Улица.Назв Get start)
                string result = this.fНазв;
                // *** Start programmer edit section *** (Улица.Назв Get end)

                // *** End programmer edit section *** (Улица.Назв Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Улица.Назв Set start)

                // *** End programmer edit section *** (Улица.Назв Set start)
                this.fНазв = value;
                // *** Start programmer edit section *** (Улица.Назв Set end)

                // *** End programmer edit section *** (Улица.Назв Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УлицаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УлицаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УлицаE", typeof(IIS.Proba_10.Улица));
                }
            }
            
            /// <summary>
            /// "УлицаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УлицаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УлицаL", typeof(IIS.Proba_10.Улица));
                }
            }
        }
    }
}
